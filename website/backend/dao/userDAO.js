import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID
let users

class userDAO {
    static async injectDB(conn) {
        console.log("INJECTION FUNCTION ACTIVE")
        if (users) {
          return
        }
        try {
          users = await conn.db("v1").collection("users")
        } catch (e) {
          console.error(
            `Unable to establish a collection handle in restaurantsDAO: ${e}`,
          )
        }
      }

    static async getUsers({
        filters = null,
        page = 0,
        usersPerPage = 20,
      } = {}) {
        let query
        if (filters) {
          if ("name" in filters) {
            query = { $text: { $search: filters["name"] } }
          } else if ("user_id" in filters) {
            query = {"user_id": { $eq: filters["user_id"] } }
          } else if ("email" in filters) {
            query = { "email": { $eq: filters["email"] } }
          }
        }

        let cursor
    
        try {
            cursor = await restaurants
                .find(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { restaurantsList: [], totalNumRestaurants: 0 }
        }

        const displayCursor = cursor.limit(restaurantsPerPage).skip(restaurantsPerPage * page)

        try {
            const restaurantsList = await displayCursor.toArray()
            const totalNumRestaurants = await restaurants.countDocuments(query)

            return { restaurantsList, totalNumRestaurants }
        } catch (e) {
            console.error(
                `Unable to convert cursor to array or problem counting documents, ${e}`,
            )
            return { restaurantsList: [], totalNumRestaurants: 0 }
        }
    }

    static async getEmails() {
        let emails = []
        try {
          emails = await users.distinct("email")
          return emails
        } catch (e) {
          console.error(`Unable to get cuisines, ${e}`)
          return emails
        }
      }
}

export default userDAO;
import { dbContext } from "../db/DbContext.js"

class PlanetsService {
    async createPlanet(planetData) {
        // await dbContext.Planets.create(planetData)
        const planet = await dbContext.Planets.create(planetData)
        return planet
    }

}
export const planetsService = new PlanetsService()
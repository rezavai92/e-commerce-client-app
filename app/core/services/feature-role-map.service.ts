import { IFeatureRoleMap } from "@/domain/interfaces/IFeatureRoleMap";
import axios from "axios";
import { IGenericResponse } from "../interfaces/IAppHttpResponse";

axios.defaults.withCredentials = true;
class FeatureRoleMap {
	async getApps(roles: string[]): Promise<IFeatureRoleMap[]> {
		let response = await axios.get<IGenericResponse<IFeatureRoleMap[]>>(`https://localhost:5000/api/appcatalogue/getApps`, {
			params: {
				UserRoles: roles,
			},
			paramsSerializer: {
				indexes: true,
			},
		});

		return response.data.data;
	}
}

export default new FeatureRoleMap();

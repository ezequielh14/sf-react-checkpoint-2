import DataUsers from "../components/DataUsers";
import { useConsumUsersAPI } from "../hooks/useConsumUsersAPI";

const UsersAPI = () => {
  const [users] = useConsumUsersAPI();
  return (
    <main className="min-h-screen pt-32 md:pt-52">
			<div className="max-w-6xl mx-auto h-full">
				<div className="flex flex-col justify-center items-center w-full gap-2 h-full px-4">
					<h1 className="text-cyan-400/80 text-2xl md:text-5xl font-bold">
						Users
					</h1>
					<DataUsers users={users} />
				</div>
			</div>
		</main>
  );
};
export default UsersAPI;

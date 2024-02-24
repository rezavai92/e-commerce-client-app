import { Button } from "@mui/material";
import { IPrimaryButtonConfig } from "../interfaces/IPrimaryButtonConfig";
import { FC } from "react";

type PrimaryButtonProps = {
	config: IPrimaryButtonConfig;
};

const PrimaryButton: FC<PrimaryButtonProps> = ({ config }) => {
	return (
		<>
			<Button className={`w-44 text-white bg-[#1976d2] hover:bg-[#1976d2]`} color="primary" onClick={config.onClick}>
				{config.text}
			</Button>
		</>
	);
};

export default PrimaryButton;

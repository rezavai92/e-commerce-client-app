export interface IPrimaryButtonConfig {
	text: string;
	onClick(event: React.MouseEvent<HTMLElement>): Promise<void> | void;
}

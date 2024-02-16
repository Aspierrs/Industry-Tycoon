import { ConveyorPole, Conveyor } from "./Conveyor";
import { Workspace } from "@rbxts/services";

const conveyor = new Conveyor([
	new ConveyorPole((Workspace.WaitForChild("c0") as BasePart).CFrame),
	new ConveyorPole((Workspace.WaitForChild("c1") as BasePart).CFrame),
	new ConveyorPole((Workspace.WaitForChild("c2") as BasePart).CFrame),
	new ConveyorPole((Workspace.WaitForChild("c3") as BasePart).CFrame),
]);
const i = 1;
while (i === 1) {
	const bezier = conveyor.renderBelt([
		new ConveyorPole((Workspace.WaitForChild("c0") as BasePart).CFrame),
		new ConveyorPole((Workspace.WaitForChild("c1") as BasePart).CFrame),
		new ConveyorPole((Workspace.WaitForChild("c2") as BasePart).CFrame),
		new ConveyorPole((Workspace.WaitForChild("c3") as BasePart).CFrame),
	]);
	task.wait(0.1);
	bezier.cleanupRender();
}
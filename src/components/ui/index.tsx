import Button from './Button';
import Input from './Input';
import Tabs from './Tabs';

const components = {
	Input,
	Button,
	Tabs,
};

export type InputType = typeof Input;

export default {
	get: (key: keyof typeof components) => components[key],
};

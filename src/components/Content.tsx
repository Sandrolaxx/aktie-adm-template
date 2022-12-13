import { ContentProps } from "../utils/types";

export default function Content(props: ContentProps) {
    return (
        <div className="flex flex-col mt-7 dark:text-gray-200">
            {props.children}
        </div>
    )
}
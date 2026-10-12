import GreetingPers from "@/components/greetingPers";
import PhotoStrip from "@/components/slideshow";
import Hobbies from "@/components/hobbies";
import FutureGoals from "@/components/futureGoals";
import Thanks from "@/components/thanks";

export default function Personal(){
    return(
        <main className="mx-auto max-w-5xl px-6">
            <GreetingPers />
            <PhotoStrip />
            <Hobbies />
            <FutureGoals />
            <Thanks />
        </main>
    );
}
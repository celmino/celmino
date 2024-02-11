import { ForEach, Text, UIController, UIView, UIViewBuilder, VStack } from "@tuval/forms";



export function Guard(...args: Function[]) {
    return function GuardClassConstructor<T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            public GetDepends() {
                const deps = args.map(arg => arg());
                return deps;
            }
        }
    }
}

export class CelminoController extends UIController {
    LoadViewInternal(): UIView {

        console.log(this)
        const result: UIView[] = (this as any).GetDepends();
        return UIViewBuilder(() => {
            return (
                VStack(
                    ...ForEach(result)(item => item),
                    this.LoadView()
                )
            )
        })
    }

}


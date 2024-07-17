describe("Error", () => {
    class ValidationError extends Error {
        constructor(public message:string){
            super(message);
        }
    }

    const doubleIt = (value: number): number => {
        if(value < 0){
            throw new ValidationError("Value cannot be less than 0");
        }

        return value * 2;
    }
    it("should can throw error", () => {
        try {
            const result = doubleIt(-1);
           console.info(doubleIt(result)); 
        } catch (error) {
            if(error instanceof ValidationError){
                console.info(error.message);
            }
        }
    });
});
class DesktopComputer {
    constructor(
        //Define parameters:
        brandName,
        size,
        liquidCooled,
        overclockable,
        storageBrand,
        storageCapacity,
        ramBrand,
        ramSize,
        ramSpeed,
        processorBrand,
        processorModel,
        processorSpeed
    ) {
        //Define properties:
        this.name = brandName;
        this.size = size;
        this.liquidCooled = liquidCooled;
        this.overclockable = overclockable;
        this.storageBrand = storageBrand;
        this.storageCapacity = storageCapacity;
        this.ram = {
            brand: ramBrand,
            size: ramSize,
            speed: ramSpeed,
        };
        this.processor = {
            brand: processorBrand,
            model: processorModel,
            speed: processorSpeed,
        };
    }

    //Add methods like normal functions:
    isOverclockable(overclockableStatus) {
        this.overclockable = overclockableStatus;
    }

    isLiquidCooled(bool) {
        this.liquidCooled = bool;
    }

    changeRam(ramBrand, ramSize, ramSpeed) {
        this.ram.brand = ramBrand;
        this.ram.size = ramSize;
        this.ram.speed = ramSpeed;
    }

    changeProcessor(brand, model, speed) {
        this.processor.brand = brand;
        this.processor.model = model;
        this.processor.speed = speed;
    }
}

export default DesktopComputer;
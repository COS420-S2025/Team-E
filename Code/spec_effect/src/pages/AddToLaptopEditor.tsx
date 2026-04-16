import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../Component/FormField";


/**stores the laptop inputs */
interface LaptopEntry {
    name: string;
    memoryGb: string;
    storageType: string;
    storageCapacityGb: string;
    cpuName: string;
    coreCount: string;
    benchSingle: string;
    benchMulti: string;
    gpuName: string;
    vramMb: string;
    benchmark3d: string;
    benchmark2d: string;
}


const AddToLaptopDatabase = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<LaptopEntry>({
        name: "",
        memoryGb: "",
        storageType: "",
        storageCapacityGb: "",
        cpuName: "",
        coreCount: "",
        benchSingle: "",
        benchMulti: "",
        gpuName: "",
        vramMb: "",
        benchmark3d: "",
        benchmark2d: "",
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleAdd = () => {
        //add database function here
        navigate("/laptop-database");
    };


    return (
        <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
            <h1>Add to Laptop Database</h1>

            <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {/* Basic Info */}
                <FormField
                    id="name"
                    label="Laptop Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />

                {/* Memory and Storage */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <FormField
                        id="memoryGb"
                        label="Memory (GB)"
                        name="memoryGb"
                        type="number"
                        value={formData.memoryGb}
                        onChange={handleChange}
                    />
                    <FormField
                        id="storageType"
                        label="Storage Type"
                        name="storageType"
                        value={formData.storageType}
                        onChange={handleChange}
                    />
                </div>

                <FormField
                    id="storageCapacityGb"
                    label="Storage Capacity (GB)"
                    name="storageCapacityGb"
                    type="number"
                    value={formData.storageCapacityGb}
                    onChange={handleChange}
                />

                {/* CPU Info */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <FormField
                        id="cpuName"
                        label="CPU Name"
                        name="cpuName"
                        value={formData.cpuName}
                        onChange={handleChange}
                    />
                    <FormField
                        id="coreCount"
                        label="Core Count"
                        name="coreCount"
                        type="number"
                        value={formData.coreCount}
                        onChange={handleChange}
                    />
                </div>

                {/* CPU Benchmarks */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <FormField
                        id="benchSingle"
                        label="Bench Single"
                        name="benchSingle"
                        type="number"
                        value={formData.benchSingle}
                        onChange={handleChange}
                    />
                    <FormField
                        id="benchMulti"
                        label="Bench Multi"
                        name="benchMulti"
                        type="number"
                        value={formData.benchMulti}
                        onChange={handleChange}
                    />
                </div>

                {/* GPU Info */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <FormField
                        id="gpuName"
                        label="GPU Name"
                        name="gpuName"
                        value={formData.gpuName}
                        onChange={handleChange}
                    />
                    <FormField
                        id="vramMb"
                        label="VRAM (MB)"
                        name="vramMb"
                        type="number"
                        value={formData.vramMb}
                        onChange={handleChange}
                    />
                </div>

                {/* GPU Benchmarks */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <FormField
                        id="benchmark3d"
                        label="Benchmark 3D"
                        name="benchmark3d"
                        type="number"
                        value={formData.benchmark3d}
                        onChange={handleChange}
                    />
                    <FormField
                        id="benchmark2d"
                        label="Benchmark 2D"
                        name="benchmark2d"
                        type="number"
                        value={formData.benchmark2d}
                        onChange={handleChange}
                    />
                </div>

                {/* Add Button */}
                <button
                    type="button"
                    onClick={handleAdd}
                    className = "add-button"
                >
                    Add Laptop
                </button>
            </form>
        </div>
    );
};


export default AddToLaptopDatabase;

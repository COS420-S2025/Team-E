import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../Component/FormField";
import { Laptop } from "../DatabaseManager";


/**stores the laptop inputs */



const AddToLaptopDatabase = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<Laptop>({
        id: "",
        name: "",
        priceCents: 0,
        memoryGb: 0,
        storageType: "",
        storageCapacityGb: 0,
        cpuName: "",
        cpuCoreCount: 0,
        cpuBenchmarkSingleThread: 0,
        cpuBenchmarkMultiThread: 0,
        gpuName: "",
        gpuVramMb: 0,
        gpuBenchmark3d: 0,
        gpuBenchmark2d: 0

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

                <FormField
                    id="price"
                    label="Laptop Price"
                    name="name"
                    value={String(formData.priceCents)}
                    onChange={handleChange}
                />


                {/* Memory and Storage */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <FormField
                        id="memoryGb"
                        label="Memory (GB)"
                        name="memoryGb"
                        type="number"
                        value={String(formData.memoryGb)}
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
                    value={String(formData.storageCapacityGb)}
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
                        value={String(formData.cpuCoreCount)}
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
                        value={String(formData.cpuBenchmarkSingleThread)}
                        onChange={handleChange}
                    />
                    <FormField
                        id="benchMulti"
                        label="Bench Multi"
                        name="benchMulti"
                        type="number"
                        value={String(formData.cpuBenchmarkMultiThread)}
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
                        value={String(formData.gpuVramMb)}
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
                        value={String(formData.gpuBenchmark3d)}
                        onChange={handleChange}
                    />
                    <FormField
                        id="benchmark2d"
                        label="Benchmark 2D"
                        name="benchmark2d"
                        type="number"
                        value={String(formData.gpuBenchmark2d)}
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

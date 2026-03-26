/** holds each laptop */

export interface Item {
    id: number;
    name: string;
}

export interface Laptop {
    id: string;
    name: string;
    ram: number;
    storage: number;
    storage_type: string;
    cpu: string|null;
    gpu: string|null;
}


export interface CPU {
    name: string;
    clock_speed: string|null;
    num_sockets: number;
    cores: number;
    multithread_benchmark: number;
    single_thread_benchmark: number;
    tdp: number;
    category: string;
}


export interface GPU {
    name: string;
    threed_benchmark: number;
    twod_benchmark: number;
    tdp: number;
    vram: number;
    category: string;
}

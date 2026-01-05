import { FlightService } from './flight.service';
import { UpdateFlightDto } from './dto/update-flight.dto';
export declare class FlightController {
    private readonly flightService;
    constructor(flightService: FlightService);
    findAll(page?: string, limit?: string): Promise<{
        page: number;
        limit: number;
        offset: number;
        data: FlightService;
        total: any;
    }>;
    findOne(id: string): string;
    update(id: string, updateFlightDto: UpdateFlightDto): string;
    remove(id: string): string;
}

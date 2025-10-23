#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_C_CommandContext {
    bool needsprocessing;
    char pad_1358[0x9f];
    int32_t command_number;
    char end_pad_1359[0x4];
};

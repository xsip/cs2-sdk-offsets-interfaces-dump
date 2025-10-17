#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class C_CommandContext {
    bool needsprocessing;
    char pad_797[0x9f];
    int32_t command_number;
    char end_pad_798[0x4];
};

#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class audioparams_t {
    char _vtable_pad_1100[0x8];
    Vector localSound[8];
    int32_t soundscapeIndex;
    uint8_t localBits;
    char pad_1101[0x3];
    int32_t soundscapeEntityListIndex;
    uint32_t soundEventHash;
};

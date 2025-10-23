#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_audioparams_t {
    char vTable1661[0x8];
    Vector localSound[8];
    int32_t soundscapeIndex;
    uint8_t localBits;
    char pad_1662[0x3];
    int32_t soundscapeEntityListIndex;
    uint32_t soundEventHash;
};

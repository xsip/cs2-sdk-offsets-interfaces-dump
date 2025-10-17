#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_audioparams_t {
    char vTable4150[0x8];
    Vector localSound[8];
    int32_t soundscapeIndex;
    uint8_t localBits;
    char pad_4151[0x3];
    int32_t soundscapeEntityListIndex;
    uint32_t soundEventHash;
};

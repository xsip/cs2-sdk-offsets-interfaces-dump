#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_SoundOpvarTraceResult_t {
    Vector vPos;
    bool bDidHit;
    char pad_2782[0x3];
    float32 flDistSqrToCenter;
};

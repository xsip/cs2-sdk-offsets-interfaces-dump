#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class ragdollelement_t {
    Vector originParentSpace;
    char pad_4[0x14];
    int32_t parentIndex;
    float32 m_flRadius;
    int32_t m_nHeight;
    char end_pad_5[0x4];
};

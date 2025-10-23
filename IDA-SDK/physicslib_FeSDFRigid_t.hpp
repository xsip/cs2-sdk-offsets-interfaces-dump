#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeSDFRigid_t {
    Vector vLocalMin;
    Vector vLocalMax;
    float32 flBounciness;
    uint16_t nNode;
    uint16_t nCollisionMask;
    uint16_t nVertexMapIndex;
    uint16_t nFlags;
    char pad_2430[0x4];
    char m_Distances[0x18];
    int32_t m_nWidth;
    int32_t m_nHeight;
    int32_t m_nDepth;
    char end_pad_2431[0x4];
};

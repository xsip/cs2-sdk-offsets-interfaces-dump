#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeBuildBoxRigid_t {
    CTransform tmFrame2;
    uint16_t nNode;
    uint16_t nCollisionMask;
    Vector vSize;
    uint16_t nVertexMapIndex;
    uint16_t nFlags;
    char end_pad_2427[0xc];
    int32_t m_nPriority;
    uint32_t m_nVertexMapHash;
    uint32_t m_nAntitunnelGroupBits;
    char end_pad_2428[0x4];
};

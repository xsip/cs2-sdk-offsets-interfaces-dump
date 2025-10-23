#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_FeBuildTaperedCapsuleRigid_t {
    fltx4 vSphere[2];
    uint16_t nNode;
    uint16_t nCollisionMask;
    uint16_t nVertexMapIndex;
    uint16_t nFlags;
    char end_pad_2435[0x8];
    int32_t m_nPriority;
    uint32_t m_nVertexMapHash;
    uint32_t m_nAntitunnelGroupBits;
    char end_pad_2434[0x4];
};

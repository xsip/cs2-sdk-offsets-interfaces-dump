#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_RigidMeshPart_t {
    uint16_t m_nRigidBLASIndex;
    int16_t m_nBoneIndex;
    uint32_t m_nStartIndexOffset;
    uint32_t m_nPrimitiveCount;
};

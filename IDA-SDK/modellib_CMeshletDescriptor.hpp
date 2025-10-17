#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "mathlib_extended_PackedAABB_t.hpp"
#include "modellib_CDrawCullingData.hpp"

class modellib_CMeshletDescriptor {
    mathlib_extended_PackedAABB_t m_PackedAABB;
    modellib_CDrawCullingData m_CullingData;
    uint32_t m_nVertexOffset;
    uint32_t m_nTriangleOffset;
    uint8_t m_nVertexCount;
    uint8_t m_nTriangleCount;
    char end_pad_339[0x2];
};

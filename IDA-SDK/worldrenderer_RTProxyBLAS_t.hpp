#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "mathlib_extended_AABB_t.hpp"

class worldrenderer_RTProxyBLAS_t {
    uint32_t m_nFirstIndex;
    uint32_t m_nIndexCount;
    uint32_t m_nVBByteOffset;
    uint32_t m_nBaseVertex;
    uint16_t m_nVertexCount;
    modellib_VertexAlbedoFormat_t m_albedoFormat;
    char pad_2585[0x1];
    mathlib_extended_AABB_t m_boundLs;
    Vector m_vVertexOriginLs;
    Vector m_vVertexExtentLs;
};

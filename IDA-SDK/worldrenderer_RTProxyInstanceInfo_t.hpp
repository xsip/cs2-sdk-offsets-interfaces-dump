#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class worldrenderer_RTProxyInstanceInfo_t {
    worldrenderer_RTProxyInstanceFlags_t m_nFlags;
    modellib_VertexAlbedoFormat_t m_albedoFormat;
    uint16_t m_nBLASCount;
    uint32_t m_nBLASIndex;
    uint32_t m_nVertexAlbedoByteOffset;
    matrix3x4_t m_mWorldFromLocal;
};

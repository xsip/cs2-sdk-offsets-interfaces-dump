#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_CMaterialDrawDescriptor.hpp"

class modellib_RTProxyDrawDescriptor_t {
    modellib_CMaterialDrawDescriptor m_drawDesc;
    matrix3x4_t m_mWorldFromLocal;
    modellib_VertexAlbedoFormat_t m_nVertexAlbedoFormat;
    int8_t m_nVertexAlbedoVB;
    uint16_t m_nVertexAlbedoOffset;
    uint16_t m_nVertexAlbedoStride;
    char end_pad_375[0x2];
};

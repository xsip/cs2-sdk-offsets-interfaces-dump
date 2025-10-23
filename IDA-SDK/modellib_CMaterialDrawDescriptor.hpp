#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_CRenderBufferBinding.hpp"

class modellib_CMaterialDrawDescriptor {
    float32 m_flUvDensity;
    Vector m_vTintColor;
    float32 m_flAlpha;
    char pad_332[0x2];
    uint16_t m_nNumMeshlets;
    char pad_333[0x4];
    uint32_t m_nFirstMeshlet;
    uint32_t m_nAppliedIndexOffset;
    uint8_t m_nDepthVertexBufferIndex;
    uint8_t m_nMeshletPackedIVBIndex;
    char pad_334[0x2];
    char m_rigidMeshParts[0x10];
    modellib_RenderPrimitiveType_t m_nPrimitiveType;
    int32_t m_nBaseVertex;
    int32_t m_nVertexCount;
    int32_t m_nStartIndex;
    int32_t m_nIndexCount;
    char pad_335[0x64];
    modellib_CRenderBufferBinding m_indexBuffer;
    modellib_CRenderBufferBinding m_meshletPackedIVB;
    char pad_336[0x10];
    char m_material[0x8];
};

#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_ModelEmbeddedMesh_t {
    CUtlString m_Name;
    char pad_386[0x8];
    int32_t m_nMeshIndex;
    int32_t m_nDataBlock;
    int32_t m_nMorphBlock;
    char pad_387[0x4];
    char m_vertexBuffers[0x18];
    char m_indexBuffers[0x18];
    char m_toolsBuffers[0x18];
    int32_t m_nVBIBBlock;
    int32_t m_nToolsVBBlock;
};

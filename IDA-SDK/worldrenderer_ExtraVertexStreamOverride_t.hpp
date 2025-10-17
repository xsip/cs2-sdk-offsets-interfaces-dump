#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_CRenderBufferBinding.hpp"

class worldrenderer_ExtraVertexStreamOverride_t {
    uint32_t m_nSceneObjectIndex;
    uint32_t m_nSubSceneObject;
    uint32_t m_nDrawCallIndex;
    modellib_MeshDrawPrimitiveFlags_t m_nAdditionalMeshDrawPrimitiveFlags;
    modellib_CRenderBufferBinding m_extraBufferBinding;
};

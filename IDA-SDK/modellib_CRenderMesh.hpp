#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class modellib_CRenderGroom;
#include "modellib_CRenderSkeleton.hpp"
#include "modellib_DynamicMeshDeformParams_t.hpp"

class modellib_CRenderMesh {
    void **__vftable_0;
    void **__vftable_1;
    char m_sceneObjects[0xa8];
    char m_constraints[0x10];
    modellib_CRenderSkeleton m_skeleton;
    char pad_364[0xbc];
    bool m_bUseUV2ForCharting;
    bool m_bEmbeddedMapMesh;
    char pad_365[0x22];
    modellib_DynamicMeshDeformParams_t m_meshDeformParams;
    char pad_366[0x4];
    modellib_CRenderGroom* m_pGroomData;
};

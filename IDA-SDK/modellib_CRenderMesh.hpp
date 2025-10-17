#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class modellib_CRenderGroom;
#include "modellib_CRenderSkeleton.hpp"
#include "modellib_DynamicMeshDeformParams_t.hpp"

class modellib_CRenderMesh {
    char vTable360[0x10];
    char m_sceneObjects[0x98];
    char m_constraints[0x10];
    modellib_CRenderSkeleton m_skeleton;
    char pad_361[0xac];
    bool m_bUseUV2ForCharting;
    bool m_bEmbeddedMapMesh;
    char pad_362[0x22];
    modellib_DynamicMeshDeformParams_t m_meshDeformParams;
    char pad_363[0x4];
    modellib_CRenderGroom* m_pGroomData;
};

#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class physicslib_CRegionSVM;
#include "mathlib_extended_AABB_t.hpp"

class physicslib_RnHull_t {
    Vector m_vCentroid;
    float32 m_flMaxAngularRadius;
    mathlib_extended_AABB_t m_Bounds;
    Vector m_vOrthographicAreas;
    matrix3x4_t m_MassProperties;
    float32 m_flVolume;
    float32 m_flSurfaceArea;
    char pad_2451[0x4];
    char m_Vertices[0x18];
    char m_VertexPositions[0x18];
    char m_Edges[0x18];
    char m_Faces[0x18];
    char m_FacePlanes[0x18];
    uint32_t m_nFlags;
    char pad_2452[0x4];
    physicslib_CRegionSVM* m_pRegionSVM;
};

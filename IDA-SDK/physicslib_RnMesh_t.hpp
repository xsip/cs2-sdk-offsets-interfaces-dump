#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class physicslib_RnMesh_t {
    Vector m_vMin;
    Vector m_vMax;
    char m_Nodes[0x18];
    CUtlVectorSIMDPaddedVector m_Vertices;
    char m_Triangles[0x18];
    char m_Wings[0x18];
    char m_TriangleEdgeFlags[0x18];
    char m_Materials[0x18];
    Vector m_vOrthographicAreas;
    uint32_t m_nFlags;
    uint32_t m_nDebugFlags;
    char end_pad_2453[0x4];
};

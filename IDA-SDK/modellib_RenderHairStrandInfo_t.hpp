#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_RenderHairStrandInfo_t {
    uint32_t m_nGuideHairIndices_nSurfaceTriIndex[2];
    uint16_t m_vGuideBary_vBaseBary[4];
    uint16_t m_vRootOffset_flLengthScale[4];
    uint16_t m_nPackedBaseUv[2];
    uint32_t m_nPackedSurfaceNormalOs;
    uint32_t m_nPackedSurfaceTangentOs;
    uint32_t m_nDataOffset_Segments;
};

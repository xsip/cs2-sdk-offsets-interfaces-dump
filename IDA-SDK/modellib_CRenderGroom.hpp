#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CRenderGroom {
    char m_hairs[0x18];
    char m_hairPositionOffsets[0x18];
    char pad_367[0x10];
    char m_hSimParamsMat[0x8];
    char m_strandSegmentCountHist[0x18];
    char pad_368[0x18];
    int32_t m_nMaxSegmentsPerHairStrand;
    int32_t m_nGuideHairCount;
    int32_t m_nHairCount;
    int32_t m_nTotalVertexCount;
    int32_t m_nTotalSegmentCount;
    int32_t m_nGroomGroupID;
    int32_t m_nAttachBoneIdx;
    int32_t m_nAttachMeshIdx;
    int32_t m_nAttachMeshDrawCallIdx;
    bool m_bEnableSimulation;
    char pad_369[0x3];
};

#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_SkeletonAnimCapture_t {
    CEntityIndex m_nEntIndex;
    CEntityIndex m_nEntParent;
    char m_ImportedCollision[0x18];
    CUtlString m_ModelName;
    CUtlString m_CaptureName;
    char m_ModelBindPose[0x18];
    char m_FeModelInitPose[0x18];
    int32_t m_nFlexControllers;
    bool m_bPredicted;
    char pad_388[0x43];
    char m_Frames[0x18];
};

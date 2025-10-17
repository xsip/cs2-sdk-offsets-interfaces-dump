#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_SkeletonBoneBounds_t.hpp"

class modellib_RenderSkeletonBone_t {
    CUtlString m_boneName;
    CUtlString m_parentName;
    matrix3x4_t m_invBindPose;
    modellib_SkeletonBoneBounds_t m_bbox;
    float32 m_flSphereRadius;
    char end_pad_387[0x4];
};

#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CFootDefinition {
    CUtlString m_name;
    CUtlString m_ankleBoneName;
    CUtlString m_toeBoneName;
    Vector m_vBallOffset;
    Vector m_vHeelOffset;
    float32 m_flFootLength;
    float32 m_flBindPoseDirectionMS;
    float32 m_flTraceHeight;
    float32 m_flTraceRadius;
};

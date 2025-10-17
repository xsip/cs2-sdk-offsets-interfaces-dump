#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animationsystem_CAnimDesc_Flag.hpp"
#include "animationsystem_CAnimEncodedFrames.hpp"
#include "animationsystem_CAnimSequenceParams.hpp"

class animationsystem_CAnimDesc {
    CBufferString m_name;
    animationsystem_CAnimDesc_Flag m_flags;
    float32 fps;
    char pad_420[0x4];
    animationsystem_CAnimEncodedFrames m_Data;
    char m_movementArray[0x18];
    CTransform m_xInitialOffset;
    char m_eventArray[0x18];
    char m_activityArray[0x18];
    char m_hierarchyArray[0x18];
    float32 framestalltime;
    Vector m_vecRootMin;
    Vector m_vecRootMax;
    char pad_421[0x4];
    char m_vecBoneWorldMin[0x18];
    char m_vecBoneWorldMax[0x18];
    animationsystem_CAnimSequenceParams m_sequenceParams;
};

#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AnimNodeID.hpp"
#include "animationsystem_HSequence.hpp"

class animgraphlib_CMotionNodeSequence {
    char vTable187[0x18];
    CUtlString m_name;
    modellib_AnimNodeID m_id;
    char end_pad_188[0x4];
    char m_tags[0x18];
    animationsystem_HSequence m_hSequence;
    float32 m_flPlaybackSpeed;
};

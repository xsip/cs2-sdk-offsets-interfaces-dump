#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AnimNodeID.hpp"
#include "animationsystem_HSequence.hpp"

class animgraphlib_CMotionNodeSequence {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    CUtlString m_name;
    modellib_AnimNodeID m_id;
    char end_pad_189[0x4];
    char m_tags[0x18];
    animationsystem_HSequence m_hSequence;
    float32 m_flPlaybackSpeed;
};

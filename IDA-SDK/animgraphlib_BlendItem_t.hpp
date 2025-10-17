#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animgraphlib_CAnimUpdateNodeRef.hpp"
#include "animationsystem_HSequence.hpp"

class animgraphlib_BlendItem_t {
    char m_tags[0x18];
    animgraphlib_CAnimUpdateNodeRef m_pChild;
    animationsystem_HSequence m_hSequence;
    Vector2D m_vPos;
    float32 m_flDuration;
    bool m_bUseCustomDuration;
    char end_pad_7[0x7];
};

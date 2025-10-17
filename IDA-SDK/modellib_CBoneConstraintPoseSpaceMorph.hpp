#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CBoneConstraintPoseSpaceMorph {
    char pad_308[0x20];
    CUtlString m_sBoneName;
    CUtlString m_sAttachmentName;
    char m_outputMorph[0x18];
    char m_inputList[0x18];
    bool m_bClamp;
    char end_pad_315[0x3f];
};

#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animationsystem_CAnimEncodeDifference.hpp"

class animationsystem_CAnimEncodedFrames {
    CBufferString m_fileName;
    int32_t m_nFrames;
    int32_t m_nFramesPerBlock;
    char m_frameblockArray[0x18];
    animationsystem_CAnimEncodeDifference m_usageDifferences;
};

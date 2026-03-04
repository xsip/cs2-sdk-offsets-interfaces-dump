#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_CAnimReplayFrame {
    void **__vftable_0;
    void **__vftable_1;
    char m_inputDataBlocks[0x18];
    CUtlBinaryBlock m_instanceData;
    char pad_45[0x8];
    CTransform m_startingLocalToWorldTransform;
    CTransform m_localToWorldTransform;
    float32 m_timeStamp;
    char end_pad_46[0xc];
};

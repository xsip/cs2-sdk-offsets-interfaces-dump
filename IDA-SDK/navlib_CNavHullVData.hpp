#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class navlib_CNavHullVData {
    bool m_bAgentEnabled;
    char pad_4171[0x3];
    float32 m_agentRadius;
    float32 m_agentHeight;
    bool m_agentShortHeightEnabled;
    char pad_4172[0x3];
    float32 m_agentShortHeight;
    bool m_agentCrawlEnabled;
    char pad_4173[0x3];
    float32 m_agentCrawlHeight;
    float32 m_agentMaxClimb;
    int32_t m_agentMaxSlope;
    float32 m_agentMaxJumpDownDist;
    float32 m_agentMaxJumpHorizDistBase;
    float32 m_agentMaxJumpUpDist;
    int32_t m_agentBorderErosion;
    bool m_flowMapGenerationEnabled;
    char pad_4174[0x3];
    float32 m_flowMapNodeMaxRadius;
};

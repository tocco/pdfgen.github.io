<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">

    <xsl:import href="../../../../../../../../../../../sdk2/internal/pdf_generator/pdf_generator.xsl"/>

  <xsl:template match="*[contains(@class, ' topic/q ')]" name="topic.q">
    <span class="q">
      <xsl:apply-templates/>
    </span>
  </xsl:template>

<!--
  <xsl:template match="*[contains(@class, ' map/map ')]">
    <xsl:call-template name="cover.page"/>
    <xsl:apply-templates select="." mode="root_element"/>
  </xsl:template> 

   <xsl:template name="cover.page">
        <h1 class="cover-page-container">
            <div class="cover-page-content">
                <div id="logo-container">
                    <img src="https://jorsek.github.io/pdfgen.github.io/styles1.1/media//logo_easyDITA_200px_500px.png"/>
                </div>
                <div class="title-text"><xsl:apply-templates select="." mode="map.title"/>
                    <div class="cover-text"><xsl:apply-templates select="." mode="map.shortdesc"/></div>
                </div>
            </div>
        </h1>
   </xsl:template>

   <xsl:template match="*" mode="map.title">
        <xsl:choose>
            <xsl:when test="child::title">
                <xsl:value-of select="title"/>
            </xsl:when>
            <xsl:when test="@title">
                <xsl:value-of select="@title"/>
            </xsl:when>
        </xsl:choose>
   </xsl:template>
   
    <xsl:template match="*" mode="map.shortdesc">
        <xsl:value-of select="descendant::shortdesc[1]"/>
   </xsl:template>
-->
</xsl:stylesheet>